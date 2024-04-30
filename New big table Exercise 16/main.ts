
let guest_list: string []= ['amna', 'ali', 'sobia', 'zain'];
// for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }

let not_present : string = 'ali';
let new_guest : string = 'Ayesha Umer';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
guest_list.unshift("Shaheen", "Sarfaraz", "Rizwan");
for(let i=0; i<guest_list.length; i++){
    console.log("Respected Sir/Madam" + guest_list[i] + ',\nWe invitedyou on dinner tomorrow.\nThank You\n')
}