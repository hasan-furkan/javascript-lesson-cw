$(document).ready(function(){
    setTimeout(getUserList, 1000)
})

// const getUserList = async ()  => {
   
//     await fetch("https://reqres.in/api/users?page=2", {
//         method: "GET"
//     })
//     .then(Response => Response.json())
//     .then(response => {
//         if (response.data[0].id != 0) {
//             for (let i = 0; i < response.data.length; i++) {
//                 $("#tbodyUserList").append(`
//                     <tr>
//                         <td>
//                             <img src="${response.data[i].avatar}" />
//                         </td>
//                         <td>
//                           ${response.data[i].id}
//                         </td>
//                         <td>
//                            ${response.data[i].email}
//                         </td>
//                         <td>
//                             ${response.data[i].first_name}
//                         </td>
//                         <td>
//                           ${response.data[i].last_name}
//                         </td>
//                     </tr>
//                 `)
                
//             }
//         }
//     })
//     .catch((e)=> console.log(e))
// }


const getUserList = async ()  => {
    
    const response = await axios({
        url: "https://reqres.in/api/users?page=2",
        method: "get"
    });
    if(response.data.data[0].id != 0){
        for (let i = 0; i < response.data.data.length; i++) {
            $("#tbodyUserList").append(`
                <tr>
                    <td>
                        <img src="${response.data.data[i].avatar}" />
                    </td>
                    <td>
                      ${response.data.data[i].id}
                    </td>
                    <td>
                       ${response.data.data[i].email}
                    </td>
                    <td>
                        ${response.data.data[i].first_name}
                    </td>
                    <td>
                      ${response.data.data[i].last_name}
                    </td>
                </tr>
            `)
            
        }
    } 
}

