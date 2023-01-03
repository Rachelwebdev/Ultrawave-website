import reviewStyle from './Review.module.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Review = () => {
  return (<>
    <div className={reviewStyle.container}>
        <div className={reviewStyle.label}>
            <h2>CUSTOMER REVIEWS</h2>
            <small>WHAT OUR CLIENTS SAY</small>
        </div>
        <div className={reviewStyle.reviews}>

            <div className={reviewStyle.review}>
                <div className={reviewStyle.img}>
                    <img src="/sdsd.jpg" alt="member" width={150} />
                </div>
                <div>
                    <span>Jari Greenbaum</span>
                    <div>
                    <small>VP of Marketing , </small>
                    <small>Centivo</small>
                    </div>
                    <div className={reviewStyle.quote}>
                        <FormatQuoteIcon sx={{scale:'1.5',transform:'rotate(180deg)',color: '#E809A0'}}/>
                        <hr/>
                    </div>
                    <p>"UtraWave is incredibly creative in everything they so. They were able to come up with a solution fpr every problem we had."</p>
                </div>
            </div>
            <div className={reviewStyle.review}>
                <div className={reviewStyle.img}>
                    <img src="/sdsd.jpg" alt="member" width={150} />
                </div>
                <div>
                    <span>Jari Greenbaum</span>
                    <div>
                    <small>VP of Marketing , </small>
                    <small>Centivo</small>
                    </div>
                    <div className={reviewStyle.quote}>
                        <FormatQuoteIcon sx={{scale:'1.5',transform:'rotate(180deg)',color: '#E809A0'}}/>
                        <hr/>
                    </div>
                    <p>"UtraWave is incredibly creative in everything they so. They were able to come up with a solution fpr every problem we had."</p>
                </div>
            </div>
            <div className={reviewStyle.review}>
                <div className={reviewStyle.img}>
                    <img src="/sdsd.jpg" alt="member" width={150} />
                </div>
                <div>
                    <span>Jari Greenbaum</span>
                    <div>
                    <small>VP of Marketing , </small>
                    <small>Centivo</small>
                    </div>
                    <div className={reviewStyle.quote}>
                        <FormatQuoteIcon sx={{scale:'1.5',transform:'rotate(180deg)',color: '#E809A0'}}/>
                        <hr/>
                    </div>
                    <p>"UtraWave is incredibly creative in everything they so. They were able to come up with a solution fpr every problem we had."</p>
                </div>
            </div>
        </div>
            
           
        </div>
        </>
  )
}
export default Review