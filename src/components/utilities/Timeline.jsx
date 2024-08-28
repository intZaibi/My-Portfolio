import React from "react";

export default function Timeline() {
    return (
        <div>
            <section>
                <div className="timeline-wrapper">

                    <h1 className="timeline-heading ">
                    Timeline
                    <img src="../images/location_arrow.svg" alt="" />
                    </h1>

                    <div className="timeline-graph">
                    
                    <div className="timeline-card-container">
                        <span className="tail"></span>
                        <span className="dot"></span>
                        <div className="timeline-card  left">
                        <div className="timeline-card-content">
                            <h3>Aug,2023</h3>
                            <h4>FSc from Govt. College No.1 Dikhan</h4>
                        </div>
                        </div>
                    </div>
                    
                    <div className="timeline-card-container">
                        <span className="tail"></span>
                        <span className="dot"></span>
                        <div className="timeline-card right">
                        <div className="timeline-card-content">
                            <h3>June,2024</h3>
                            <h4>Diploma of IT from GCT Dikhan</h4>
                        </div>
                        </div>
                    </div>

                    <div className="timeline-card-container">
                        <span className="dot last-dot"></span>
                        <span className="dot last-dot anime"></span>
                        <div className="timeline-card  left">
                        <div className="timeline-card-content">
                            <h3>2024-ongoing</h3>
                            <h4>BS Computer Science From GC No.1 DIK</h4>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>
        </div>
    );
}
