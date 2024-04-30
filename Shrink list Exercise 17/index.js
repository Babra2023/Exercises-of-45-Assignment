var guest_list = ['amna', 'ali', 'sobia', 'zain'];
// for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
var not_present = 'ali';
var new_guest = 'Ayesha Umer';
guest_list[1] = new_guest;
//  for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
//}
guest_list.unshift("Shaheen", "Sarfaraz", "Rizwan");
//  for(let i=0; i<guest_list.length; i++){
//   console.log("Respected Sir/Madam" + guest_list[i] + ',\nWe invitedyou on dinner tomorrow.\nThank You\n')
//}
console.log('\nUnfortunately we can not arrange a big table , Only two persons allowed.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam,".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ',\nYes you are still invited for dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
