puts 'creating questions'

 questionList = Question.create([
  {
    title: "How to check if a key is present in a hash?",
    tag: "Ruby"
  },
  {
    title: "How to check if the useState hook is being used?",
    tag: "React"
  },
  {
    title: "How to check if the DOM is being loaded properly?",
    tag: "Javascript"
  },
  {
    title: "How to create a custom scope?",
    tag: "Rails"
  },
  {
    title: "When to use a class method vs instance method?",
    tag: "Ruby"
  },
  {
    title: "What is binary search?",
    tag: "Data Structures"
  },
  {
    title: "How to check if an id present in a response from API?",
    tag: "Rails"
  },
  {
    title: "How to check/test API endpoints?",
    tag: "Rails"
  }
])

puts 'questions created'