import React from 'react'

export default function About() {

  return (
    <div className='container'>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        iNotebook- Notes on cloud
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Cloud-based note-taking revolutionizes the way we manage information. It provides users with the flexibility to access and edit notes across various devices and platforms. This mobility ensures that you can seamlessly transition between your computer, smartphone, or tablet, allowing you to work from virtually anywhere. Beyond mere convenience, these services offer powerful collaboration features, enabling real-time teamwork and sharing of ideas. They also come with advanced functionalities like OCR, multimedia support, and automatic backups, making them versatile tools for both personal and professional use. Whether you're a student, professional, or creative, cloud-based note-taking enhances your productivity and organization, all while keeping your notes safe and accessible.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatibility
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Developed By Ayush Agarwal 
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p><strong>Ayush Agrawal </strong>is an engineering Student with a passion for building useful and engaging apps. </p>
                    <p>An student Graduated with Electronics and Telecommunication engineering from R.V College of Engineering in 2023.</p>
                    <i>Start using iNotebook to make your life easier!</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

