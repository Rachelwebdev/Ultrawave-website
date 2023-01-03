import teamStyle from './Team.module.css'



const Team = () => {
  return (
    <div className={teamStyle.bg}>
        <div className={teamStyle.container}>
            <h2>OUR TEAM</h2>
            <div className={teamStyle.team}>

                    
                    <div className={teamStyle.member}>
                        <div className={teamStyle.image}>
                            <img src="/rachel.png" alt="member" width={150} />
                        </div>
                        <hr />
                        <div>
                            <h2>Rachel Isaac</h2>
                            <p>Frontend developer</p>
                        </div>
                    </div>
                    
                   
                    <div className={teamStyle.member}>
                        <div className={teamStyle.image}>
                            <img src="/img.png" alt="member" width={150} />
                        </div>
                        <hr />
                        <div>
                            <h2>Othmane Elkantaoui</h2>
                            <p>Frontend developer</p>
                        </div>
                    </div>
                    
                    
                    <div className={teamStyle.member}>
                        <div className={teamStyle.image}>
                            <img src="/muhammad.png" alt="member" width={150} />
                        </div>
                        <hr />
                        <div>
                            <h2>Muhammad</h2>
                            <p>Fullstack developer</p>
                        </div>
                    </div>
                    
            </div>
            
           
        </div>
    </div>
  )
}
export default Team