export default ({color}) => (
    <div className="is-hidden-touch">        
       
        I'm <span>Rafael</span> Dias        
        
        
        <style jsx>{`
            div {
                color: ${color};
                font-size: 8em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
            }
            @media screen and ( max-height: 690px ) {
                div {
                    display: none;
                }
            }
        `}</style>
    </div> 
)