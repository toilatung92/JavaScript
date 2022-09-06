var courses = [
    {
        id : 1,
        name : 'Javarscrip',
        coin: 66 ,
        
    },
    {
        id : 2,
        name : 'PHP',
        coin: 98,
        
    },
    {
        id : 3,
        name : 'RUBY',
        coin: 45,
        
    },
    {
        id : 4,
        name : 'ReactJS',
        coin: 0,
        
    },
    {
        id : 5,
        name : 'HTML',
        coin: 1200,
        
    },
    {
        id : 6,
        name : 'HTML',
        coin: 87,
        
    }]

    //Map (Khi Muốn chỉnh sửa , thay đổi element của 1 Array)

     function  coursesHandler(courses) {
        console.log(courses)
        return {
            id : courses.id,
            name: `Khóa học: ${courses.name}`,
            coin: courses.coin,
            coinText :`Giá : ${courses.coin}`
        }
    }

    var newCourser = courses.map(coursesHandler);
        console.log(newCourser)