//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. For no names, respond with 'no one likes this', for 1 like respond with 'Name1 likes this', for 2 likes respond with 'name1 and name2 like this'. for 3 names respond with 'Name1, Name2 and Name3 like this' and for 4 or more likes respond with "Name1, Name2 and # other people like this"


function likes(names) {
  let oneName = `${names[0]} likes this`
  let twoNames = `${names[0]} and ${names[1]} like this`
  let threeNames = `${names[0]}, ${names[1]} and ${names[2]} like this`
  let fourOrMore = `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  if(names.length==0){
    return 'no one likes this'
  }else if(names.length==1){
    return oneName
  }else if(names.length==2){
    return twoNames
  }else if(names.length==3){
    return threeNames
  }else if(names.length>=4){
    return fourOrMore
  }
}