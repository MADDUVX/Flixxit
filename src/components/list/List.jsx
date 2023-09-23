import "./list.css";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
const List= function(){
    return(
        <>
        <div className="list">
            <span className="list-title">Contiue To watch</span>
                <div className="wrapper">
                <ArrowBackIosOutlinedIcon/>
                <div className="listcontainer">

                </div>
                <ArrowForwardIosOutlinedIcon/>              
                 </div>
        </div>
        
        </>
    )
}

export default List;