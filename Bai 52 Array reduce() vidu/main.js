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

    var tongCoin = courses.reduce(function(tong, course){
        return tong + course.coin
    }, 0)
    console.log(tongCoin)


    //Flat = Làm phẳng mảng từ depth array - Mảng sâu

    var depthArray = [1, 2, [3, 4], 5, 6, 7, [ 8, 9 ]];

    var flatArray = depthArray.reduce(function(flatOutput,depthItem) {
        return flatOutput.concat(depthItem)
    },[]);

    console.log(flatArray);