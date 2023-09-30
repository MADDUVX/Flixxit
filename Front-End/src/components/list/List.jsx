import "./list.css";
import { useRef ,useState} from "react";
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from "../listitem/ListItem";

const List= function(){
    const listRef= useRef();
    const [slideNumer,setSlideNumber]= useState(0);
    
   
    const handleClick=(direction)=>{
         let distance = listRef.current.getBoundingClientRect().x-50;
         
        if(direction==="left"&& slideNumer>0){
            setSlideNumber(slideNumer-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`;
        }
        if(direction==="right"&& slideNumer<5){
            setSlideNumber(slideNumer+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`;
    }


    }
    return(
        <>
        <div className="list">
            <span className="list-title">Continue To watch</span>
                <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")}/>
                <div className="listcontainer" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    <ListItem index={10}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>              
                 </div>
        </div>
        
        </>
    )
}

export default List;