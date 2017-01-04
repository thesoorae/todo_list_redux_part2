# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p 'Creating Todos'
todo1 = Todo.create(title: 'First', body: 'first body')
todo2 = Todo.create(title: 'Second', body: 'first body')
todo3 = Todo.create(title: 'Third', body: 'first body')
todo4 = Todo.create(title: 'Fourth', body: 'first body')

p 'Creating Steps'
Step.create(title: 'step1', body: 'step1', todo_id: todo1.id)
Step.create(title: 'step2', body: 'step2', todo_id: todo1.id)
Step.create(title: 'step2', body: 'step3', todo_id: todo1.id)
Step.create(title: 'step1', body: 'step1', todo_id: todo2.id)
Step.create(title: 'step2', body: 'step2', todo_id: todo2.id)
Step.create(title: 'step1', body: 'step1', todo_id: todo3.id)
Step.create(title: 'step1', body: 'step1', todo_id: todo4.id)
