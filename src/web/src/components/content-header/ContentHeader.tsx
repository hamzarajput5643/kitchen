const ContentHeader = ({ title, body }: { title: string, body: string }) => {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="/">{title}</a>
                            </li>
                            <li className="breadcrumb-item active">{body}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentHeader;