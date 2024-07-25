import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Badge, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { KitchenSettings, PhotoType } from '@app/app/types/Settings';
import { updateKitchenMutation } from '@app/services/mutations';
import { useKitchenImages } from '../../../services/queries';
import { ImageUtils } from '../../utils/ImageUtils';
import { getKitchenPics } from '../../../services/api';
import { ImageResponse } from '@app/app/interfaces/Response';

interface SettingsFormProps {
    initialValues: KitchenSettings;
    isLoading?: boolean;
}

const validationSchema = Yup.object().shape({
    kitchenName: Yup.string().required('Name is required!'),
    contactPhone: Yup.string().required('Phone is required'),
    contactEmail: Yup.string().email('Invalid email format').required('Email is required'),
    aboutMe: Yup.string(),
    notes: Yup.string(),
    paypalEmail: Yup.string().email('Invalid email format'),
    paymentPolicy: Yup.string(),
    cancellationPolicy: Yup.string(),
    taxRate: Yup.number()
});

const SettingsForm: React.FC<SettingsFormProps> = ({ initialValues, isLoading }) => {
    const updateKitchenSettings = updateKitchenMutation();

    const { data: galleryImages, refetch: refetchGalleryImages } = useKitchenImages(initialValues.kitchenId, { skip: true }); 

    const [showImages, setShowImages] = useState(false);
    const [images, setImages] = useState<ImageResponse[]>([]);

    const [bgImage, setBgImage] = useState<string | null>(null);
    const [pfImage, setPfImage] = useState<string | null>(null);

    useEffect(() => {
        if (initialValues.kitchenId && initialValues.kitchenId !== null && initialValues.kitchenId !== 0) {
            getImages();
        }
    }, [initialValues.kitchenId]);

    const getImages = async () => {
        try {
            const [pfImageRes, bgImageRes] = await Promise.all([
                getKitchenPics(initialValues.kitchenId, 'pf'),
                getKitchenPics(initialValues.kitchenId, 'bg')
            ]);

            setPfImage(pfImageRes?.base64Data || null);
            setBgImage(bgImageRes?.base64Data || null);
        } catch (error) {
            setPfImage(null);
            setBgImage(null);
        }
    };

    useEffect(() => {
        if (galleryImages) {
            setImages(galleryImages as ImageResponse[]);
        }
    }, [galleryImages]);

    const toggleShowImages = () => {
        setShowImages(!showImages);
        if (!showImages) {
            refetchGalleryImages();
        }
    };

    const handleSubmit = async (values: KitchenSettings) => {
        try {
            const response = await updateKitchenSettings.mutateAsync(values);
            if (response.isSucceed) {
                await getImages();
                toast.success("Settings updated successfully");
            }
        } catch (error) {
            toast.error(`Error submitting form: ${error}`);
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='card'>
                                <div className="card-header">
                                    <h3 className='card-title'>Kitchen Settings</h3>
                                    <br />
                                    <p className="title-p">Fill out the form below to setup your Kitchen</p>
                                </div>
                                <div className="card-body">
                                    <div className="wrapper">
                                        <Formik
                                            enableReinitialize={true}
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ setFieldValue, values }) => (
                                                <Form>
                                                    <div className="card card-info">
                                                        <div className="card-header">
                                                            <h5>General Info</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Kitchen Name</label>
                                                                <Field name="kitchenName" type="text" placeholder="Kitchen name" />
                                                                <ErrorMessage name="kitchenName" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Kitchen Contact Phone</label>
                                                                <Field name="contactPhone" type="text" placeholder="Kitchen contact phone" />
                                                                <ErrorMessage name="contactPhone" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Kitchen Contact Email</label>
                                                                <Field name="contactEmail" type="text" placeholder="Kitchen contact email" />
                                                                <ErrorMessage name="contactEmail" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="input-box">
                                                                <label>Kitchen About Me</label>
                                                                <Field as="textarea" name="aboutMe" rows={5} placeholder="Kitchen about me" />
                                                                <ErrorMessage name="aboutMe" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="input-box">
                                                                <label>Kitchen Notes</label>
                                                                <Field as="textarea" name="notes" rows={5} placeholder="Kitchen notes" />
                                                                <ErrorMessage name="notes" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-3 ps-1">
                                                        <p style={{ fontSize: '10px' }}>(Will Appear on all orders)</p>
                                                    </div>
                                                    <div className="card card-info">
                                                        <div className="card-header">
                                                            <h5>Images</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row image-box">
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box file-input-box">
                                                                <label>Upload Profile Picture</label>
                                                                <input
                                                                    type="file"
                                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                        const file = event.currentTarget.files && event.currentTarget.files[0];
                                                                        setFieldValue('profileImage', file);
                                                                        setFieldValue('photoType', PhotoType.Profile);
                                                                    }}
                                                                />
                                                                <ErrorMessage name="profileImage" component="div" className="error" />
                                                            </div>
                                                            {pfImage && (
                                                                <div className="row col-12 mt-3">
                                                                    <div className="image-box">
                                                                        <ImageUtils imageUrl={pfImage} />
                                                                    </div>
                                                                </div>
                                                            )} 
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box file-input-box">
                                                                <label>Update Background Picture</label>
                                                                <input
                                                                    type="file"
                                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                        const file = event.currentTarget.files && event.currentTarget.files[0];
                                                                        setFieldValue('backgroundImage', file);
                                                                        setFieldValue('photoType', PhotoType.Background);
                                                                    }}
                                                                    accept='image/*'
                                                                />
                                                                <ErrorMessage name="backgroundImage" component="div" className="error" />
                                                            </div>
                                                            {bgImage && (
                                                                <div className="row col-12 mt-3">
                                                                    <div className="image-box">
                                                                        <ImageUtils imageUrl={bgImage} />
                                                                    </div>
                                                                </div>
                                                            )} 
                                                        </div>
                                                    </div>
                                                    <div className="card card-info">
                                                        <div className="card-header">
                                                            <h5>Gallery Images</h5>
                                                        </div>
                                                    </div>
                                                    <div className='row image-box'>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box file-input-box">
                                                                <Badge className='badge badge-secondary pt-1 pb-1 mt-2 mb-2'>Add New Kitchen Gallery Photos</Badge>
                                                                <input
                                                                    type="file"
                                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                        setFieldValue('galleryPhotos', event.currentTarget.files);
                                                                        setFieldValue('photoType', PhotoType.Gallery);
                                                                    }}
                                                                    accept='image/*'
                                                                    multiple
                                                                />
                                                                <ErrorMessage name="galleryPhotos" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-12 mt-3">
                                                            <div className='text-center'>
                                                                <Button type="button" onClick={toggleShowImages} className="btn btn-info btn sm">
                                                                    {showImages ? 'Hide Images' : 'Show Images'}
                                                                </Button>
                                                            </div>
                                                            {showImages && (
                                                                <div className="row mt-2">
                                                                    {images.map((image: ImageResponse, index: number) => (
                                                                        <div className="col-12 col-md-3" key={index}>
                                                                            <div className="image-box">
                                                                                <ImageUtils imageUrl={image.base64Data} />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="card card-info">
                                                        <div className="card-header">
                                                            <h5>Payment Info</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>PayPal Account Email</label>
                                                                <Field name="paypalEmail" type="text" placeholder="PayPal account email" />
                                                                <ErrorMessage name="paypalEmail" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Tax Rate</label>
                                                                <Field name="taxRate" type="text" placeholder="Tax rate" />
                                                                <ErrorMessage name="taxRate" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="input-box">
                                                                <label>Payment Policy</label>
                                                                <Field as="textarea" name="paymentPolicy" type="text" placeholder="Payment policy" />
                                                                <ErrorMessage name="paymentPolicy" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="input-box">
                                                                <label>Cancellation Policy</label>
                                                                <Field as="textarea" name="cancellationPolicy" type="text" placeholder="Cancellation policy" />
                                                                <ErrorMessage name="cancellationPolicy" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mt-3">
                                                        <Field name="salesTaxFlag" type="checkbox" className="me-2 mb-3" style={{ height: "20px", width: "20px" }} />
                                                        <p style={{ fontSize: "14px", marginLeft: "5px" }}>Apply tax to orders</p>
                                                    </div>
                                                    <div className="card card-info">
                                                        <div className="card-header">
                                                            <h5>Social Connections</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Facebook Page</label>
                                                                <Field name="facebookPage" type="text" placeholder="Facebook page" />
                                                                <ErrorMessage name="facebookPage" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Google Page</label>
                                                                <Field name="googlePage" type="text" placeholder="Google page" />
                                                                <ErrorMessage name="googlePage" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Twitter Page</label>
                                                                <Field name="twitterPage" type="text" placeholder="Twitter page" />
                                                                <ErrorMessage name="twitterPage" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>Twitter UserName</label>
                                                                <Field name="twitterUserName" type="text" placeholder="Twitter user name" />
                                                                <ErrorMessage name="twitterUserName" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>LinkedIn Page</label>
                                                                <Field name="linkedInPage" type="text" placeholder="LinkedIn page" />
                                                                <ErrorMessage name="linkedInPage" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-4">
                                                            <div className="input-box">
                                                                <label>YouTube Page</label>
                                                                <Field name="youTubePage" type="text" placeholder="YouTube page" />
                                                                <ErrorMessage name="youTubePage" component="div" className="error" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-end mt-3">
                                                        <Button type="submit" className="btn btn-success">Update Settings</Button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SettingsForm;