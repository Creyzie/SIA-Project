    const express = require ('express') 
    const cors = require ('cors') 
    const path = require ('path') 

    const app = express()
    const port = 3000


    app.use (cors())
    app.use(express.json())
    app.use(express.static(path.join(__dirname, 'public')))


    const students = [
        {
            id: 1,
            name: "john doe",
            course: "bscs"

        } 
        , {
            id: 2,
            name: "john balls",
            course: "bscs"

        }  ,{
            id: 3,
            name: "john de",
            course: "bscs"

        }
    ]

    app.get('/api/students', (req, res) =>{
    res.json(students)
    })

    app.post(`/api/students`, (req,res) => {
        const {name, course } = req.body
        const id = students.length + 1
        const newStudent = {id, name,course}
        students.push(newStudent)
        
        res.json(201).json({
    message: "student added successfuly",
    student: (newStudent)

        })
    })

    app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
    }); 
