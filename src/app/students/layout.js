import Link from "next/link"
export const students  =[
    {
        name:"Tejas",
        email:'tejas@gmail.com',
        mobile:"42325232", 
        id:1
    },
    {
        name:"shital",
        email:'shital@gmail.com',
        mobile:"42325232", 
        id:2
    },
    {
        name:"Vijay",
        email:'vijay@gmail.com',
        mobile:"534232", 
        id:3
    },
    {
        name:"Virat",
        email:'virat@gmail.com',
        mobile:"344232", 
        id:4
    },
    {
        name:"laxman",
        email:'laxman@gmail.com',
        mobile:"53432", 
        id:5
    },
]
export default function StudentLayOut ({children}){
   
return (
    <div className="student__layout">
        <div>
        {
            students.map((item, index)=>{
                return (
                <li ><Link href={`/students/${item.id}`}>{item.name}</Link></li>
                )
            })
        }
        </div>
        <div>
            {children}
        </div>
    </div>
)
}

