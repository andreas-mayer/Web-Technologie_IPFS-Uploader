import './App.css'
import {useState} from 'react'
import {create} from 'ipfs-http-client'

const client = create('/ip4/127.0.0.1/tcp/5001')

function App() {
    const [fileUrl, updateFileUrl] = useState(``)
    const [fileUrlIpfsIo, updateFileUrlIpfsIo] = useState(``)
    const [fileUrlBrowser, updateFileUrlBrowser] = useState(``)
    const [cid, updateCid] = useState(``)

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(file)
            const url = `http://localhost:8080/ipfs/${added.path}`
            const ipfsIoUrl = `https://ipfs.io/ipfs/${added.path}`
            const browserUrl = `ipfs://${added.path}`
            updateFileUrl(url)
            updateFileUrlIpfsIo(ipfsIoUrl)
            updateFileUrlBrowser(browserUrl)
            updateCid(`${added.path}`)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary">
                <a className="navbar-brand p-3" href="#">IPFS Uploader</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:5001/webui">IPFS Node WebUI</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to the IPFS Uploader!</h1>
                <p className="lead">This is a simple website served via IPFS.</p>
                <hr className="my-4"/>
                <p>With the Upload Button, you will upload the selected file to IPFS.</p>
                <p className="lead">
                    <div className="custom-file mb-3">
                        <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={onChange}
                               required/>
                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose
                            file...</label>
                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                </p>
            </div>
            <div className="container border-primary mt-4 rounded-3">
                {
                    fileUrl && fileUrlIpfsIo && fileUrlBrowser && (
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <div className="card w-40">
                                    <div className="card-body">
                                        <h5 className="card-title">Open file on local Node</h5>
                                        <p className="card-text">CID: <b>{cid}</b></p>
                                        <a href={fileUrl} className="btn btn-primary">Open</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card w-40">
                                    <div className="card-body">
                                        <h5 className="card-title">Open file on ipfs.io public gateway</h5>
                                        <p className="card-text">CID: <b>{cid}</b></p>
                                        <a href={fileUrlIpfsIo} className="btn btn-warning">Open</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card w-40">
                                    <div className="card-body">
                                        <h5 className="card-title">Open file with browser addon / Brave</h5>
                                        <p className="card-text">CID: <b>{cid}</b></p>
                                        <a href={fileUrlBrowser} className="btn btn-danger">Open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App
