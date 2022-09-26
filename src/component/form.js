import Syntxt from './parent';
function Form(){
    return(
        
        <form>
            <section className='sec'>
                <div className='w-100'>
                    <h2>Prosonl info</h2>
                <Syntxt name="Your Name :" type="text"/>
                <Syntxt name="Your Phone No :" type="number"/>
                <Syntxt name="Your Email :" type="email"/>
                </div>
            </section>
            <section className='sec'>
                <div className='w-100'>
                <h2>Parent info</h2>
                <Syntxt name="Your Parent Name :" type="text" />
                <Syntxt name="Your Parent P.no :" type="number" />
                <Syntxt name="Your Parent Email :" type="email" />
                </div>
            </section>
            <section className='sec'>
                <div className='w-100'>
                <h2>Study info</h2>
                <Syntxt name="Your Study Field :" type="text" />
                <Syntxt name="Your study Year :" type="date" />
                </div>
            </section>
            <input type={'submit'} className='submit'/>
        </form>
    );
}

export default Form;