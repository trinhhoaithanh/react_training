import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='pt-4 px-5'>
        <div className='row gx-lg-5'>
        <div className='col-lg-4 col-xxl-4 mb-5 h-100'>
            <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fa fa-folder mt-3' style={{fontSize:'25px'}}>
                        </i>
                
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
                    <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 col-xxl-4 mb-5'>
        <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fa fa-cloud-download-alt mt-3' style={{fontSize:'25px'}}>
                        </i>
                        
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>Free to download</h2>
                    <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 col-xxl-4 mb-5 '>
        <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fab fa-rocketchat mt-3' style={{fontSize:'25px'}}>
                        </i>
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>Jumbotron hero header</h2>
                    <p className='mb-0'>The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 col-xxl-4 mb-5 '>
        <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0  '>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fab fa-bootstrap mt-3' style={{fontSize:'25px'}}>
                        </i>
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>Feature boxes</h2>
                    <p className='mb-0'>We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 col-xxl-4 mb-5'>
        <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fa fa-code mt-3' style={{fontSize:'25px'}}>
                        </i>
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>Simple clean code</h2>
                    <p className='mb-0'>We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 col-xxl-4 mb-5'>
        <div className='card bg-light border-0 h-100 position-relative'>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                    <div className='icon bg-primary bg-gradient text-white rounded-3 mb-4 mt-4 d-inline-flex align-center justify-content-center position-absolute top-0 start-50 translate-middle' style={{height:'64px',width:'64px',fontSize:'2px'}}>
                    <i className='fa fa-check-circle mt-3' style={{fontSize:'25px'}}>
                        </i>
                    </div>
                    <div style={{margin:'80px'}}>
                    <h2 className='fs-4 fw-bold'>A name you trust</h2>
                    <p className='mb-0'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </div>
      
    )
  }
}

