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

    var i = 0 ;

    function coinHandler(accumulator , currentValue , currentIndex , originArray) {
        i++;
        var total = accumulator + currentValue.coin;
        console.table({
            'Lượt Chạy: ': i,
            'Biến tích trữ ' : accumulator,
            'Giá :' : currentValue.coin,
            'Tổng :': total
        });
       
        return total;
    }

    var totalCoin = courses.reduce( coinHandler, 0 );