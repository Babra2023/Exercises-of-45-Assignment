var guest_list = ['amna', 'ali', 'sobia', 'zain'];
// for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
var not_present = 'ali';
var new_guest = 'Ayesha Umer';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift("Shaheen", "Sarfaraz", "Rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ',\nWe invitedyou on dinner tomorrow.\nThank You\n');
}
