import { useNavigate } from 'react-router-dom';

function Update(){
    const navigate = useNavigate();

    const Update=()=>{
        navigate('/student');
    }
    return (
        <>
            <div className="foam  grid">
                <div className='type a'>
                    <input type="text" name="Name" className="input" placeholder='Name'/>
                </div>
                <div className='type b'>
                    <input type='number' name="Num" className="input" placeholder='Age'/>
                </div>
                <div className='type c'>
                    <input type="text" name="Course" className="input" placeholder='Course'/>
                </div>
                <div className='type d'>
                    <input type="text" name="Batch" className="input" placeholder='Batch'/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value='Cancel' className='btn' />
                    <input type="submit" onClick={Update}  className='btn'/>
                </div>
            </div>

        </>
    )
}
export default Update