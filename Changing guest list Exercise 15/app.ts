let guest_list: string []= ['amna', 'ali', 'sobia', 'zain'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')

}
let not_present : string = 'ali';
let new_guest : string = 'Ayesha Umer';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
console.log(`Mr. ${not_present} will not come tomorrow dinner.`);