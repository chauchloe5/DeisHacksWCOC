import mongoose from 'mongoose';

interface ITodo {
    title: string;
    description: string;
}

// Just add build function to existing Todo model
// <any>: generic, takes in types as arguments too
// updated type any to TodoDoc
interface TodoModelInterface extends mongoose.Model<any> {
    build(attr: ITodo): TodoDoc
}

// new Todo ({ title: 'some title', description: 'some description' })
// function that takes param name, type string:
// function test(name: string) {}
// name param is expecting arg (object that contains title and description)
// function test(name: ITodo) {}


interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
  }
  
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

// new Todo({
//     title: 'some title',
//     description: 'some description',
// })

//const Todo = mongoose.model('Todo', todoSchema)
const Todo = mongoose.model<any, TodoModelInterface>('Todo', todoSchema)


Todo.build({
    title: 'title',
    description: 'descr'
})

// parameter attr of type ITodo 
const build = (attr: ITodo) => {
    return new Todo(attr)
} 

build({
    title: "title",
    description: 'some description'
})

export{ Todo }