import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuizDeatails from './QuizDeatails'

export default function Quiz() {
    const [question,setQuestion]=useState([])
    const [answer,setAnswer]=useState()
    const [loading,setLoading]=useState(true)
    const [showAnswer,setShowAnswer]=useState(true)
    const [correctAns,setCorrectAns]=useState()

    useEffect(()=>{
        const fetchHandle= async()=>{
            try{
     const res= await axios.get("https://hungry-lace-silverfish.glitch.me//api/questions")
     setQuestion(res.data.questions)
     console.log(res.data.questions)
     setLoading(false)
    }
    catch(err){
     console.log(err)
      }
      finally{
        setLoading(false)
      }

        }
        fetchHandle()
    },[])

    const handleAnswer=(e)=>{
        setAnswer(e.target.value)
        console.log(e.target.value)
        
        // console.log(ans)


    }
    const handleCAn=(id)=>{
        setShowAnswer(!showAnswer)
        // let filterData=question.filter((question)=>{
        //  return   question.id==id
        // })
       }
  return (
    <div>
            {showAnswer && <QuizDeatails data={handleAnswer} items={handleCAn}/>}

      {loading ? <p>Loading</p> :(question.map((items)=>(
        <div key={items.id}>
        <h2>Question no {items.id} {items.question}</h2>
        <select value={answer} onChange={(e)=>handleAnswer(e)}>
        <option>---Options---</option>
        {
         items.options.map((ele)=>(
       <option value={ele}>{ele}</option>
    ))}        
        </select>
        <button onClick={()=>(handleCAn(items.id))}>{showAnswer? "Hide Answer" :"Show Answer"}</button>
        {/* {setCorrectAns(items.answer)} */}
        </div>
    )))}
    </div>
  )
}

