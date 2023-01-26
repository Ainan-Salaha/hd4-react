import { Link } from "react-router-dom"
import './StudentD.css'

function Table() {

    let arr = [
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' },
        { Name: 'Ainan Salaha', Num: 23, Course: 'MERN Stack', Batch: 'EA18' }
    ]

    return (
        <>
            <div className='flex main_box'>
                <div className='name'>Student Details</div>
                <div><Link className='btn' to='/Entry-Data' >Add New Student</Link></div>
            </div>
            <div className="table ">
                <table>
                    <thead>
                        <tr>
                            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Name</td>
                            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.4)' }}>Age</td>
                            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Course</td>
                            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.4)' }}>Batch</td>
                            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>Change</td>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>{data.Name}</td>
                                    <td style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>{data.Num}</td>
                                    <td style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>{data.Course}</td>
                                    <td style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>{data.Batch}</td>
                                    <td style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}><Link to='/edit'>Edit</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table


