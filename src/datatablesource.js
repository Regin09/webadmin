export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, 
    {
    field:"user", 
    headerName:"User", 
    width: 230, 
    renderCell: (params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        );
    },
},
{
    field:"email", 
    headerName:"Email", 
    width: 230,
},
{
    field:"age", 
    headerName:"Age", 
    width: 100,
},
{
    field:"status", 
    headerName:"Status", 
    width: 160,
    renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        )
    }
},
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "pending",
        email: "2snow@gmail.com",
        age: 40,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "3snow@gmail.com",
        age: 15,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "5snow@gmail.com",
        age: 22,
    },
    {
        id: 5,
        username: "Sembiring",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "6snow@gmail.com",
        age: 34,
    },
    {
        id: 6,
        username: "Georgius",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "6snow@gmail.com",
        age: 31,
    },
    {
        id: 7,
        username: "Regin",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "7snow@gmail.com",
        age: 25,
    },
]