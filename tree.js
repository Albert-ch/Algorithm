var arrList = [
    {
        'node_id' : 1,
        'parent_id' : 0,
        'name' : 'name01'
    },
    {
        'node_id' : 2,
        'parent_id' : 1,
        'name' : 'name02'
    },
    {
        'node_id' : 3,
        'parent_id' : 1,
        'name' : 'name03'
    },
    {
        'node_id' : 4,
        'parent_id' : 1,
        'name' : 'name04'
    },
    {
        'node_id' : 5,
        'parent_id' : 2,
        'name' : 'name05'
    },
    {
        'node_id' : 6,
        'parent_id' : 2,
        'name' : 'name06'
    }
]

// 胎死腹中
function s(arr) {
    return arr.map( item => {
        return {...item,children: arr.filter( item2 => ( item2.parent_id == item.node_id ) ) }
    } ).filter( item3 => item3.children.length )
}

function tree(arr) {
    for(let i =0; i< arr.length ; i++){
        let a =arr.filter( item => item.parent_id == arr[i].node_id )
        console.log(a,'++')
        arr[i].children = [];
        arr[i].children.push(...a)
    }
    return arr.filter( item => item.parent_id == 0 )
}

tree(arr)