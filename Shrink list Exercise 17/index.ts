
let guest_list: string []= ['amna', 'ali', 'sobia', 'zain'];
// for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }

let not_present : string = 'ali';
let new_guest : string = 'Ayesha Umer';
guest_list[1] = new_guest;
//  for(let i=0; i<guest_list.length; i++){
 //  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
//}
guest_list.unshift("Shaheen", "Sarfaraz", "Rizwan");
//  for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam" + guest_list[i] + ',\nWe invitedyou on dinner tomorrow.\nThank You\n')
//}
console.log('\nUnfortunately we can not arrange a big table , Only two persons allowed.')
while(guest_list.length>2){
    let remove_guest =  guest_list.pop();
    console.log(`Sorry Sir/Madam,${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
       console.log("Respected Sir/Madam" + guest_list[i] + ',\nYes you are still invited for dinner\nThank You\n')
}

guest_list.splice(0,2)
console.log(guest_list)