todos = [ 
        {todo: "aaa", isChecked: false, id: 1},
        {todo: "bbb", isChecked: false, id: 2},
        {todo: "ccc", isChecked: false, id: 3}
        ]

    todos.push({
      todo: "todo",
      isChecked: false,
      id: 0
    })

  countId(){
    let id = 0
    const id = 0 +1
    return id
    // const ids = this.todos.map(function(o){return o.id})
    // if(!ids.length) {return 1}
    // else{return Math.max.apply(null,ids) +1}
  }

  console.log(todos)