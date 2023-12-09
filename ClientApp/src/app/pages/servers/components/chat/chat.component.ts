import { Component, ViewEncapsulation } from '@angular/core';
const data = JSON.parse(`[{"id":"15fb24c7-15cd-46c3-a573-be219aa532ac","first_name":"Daune","last_name":"Baurerich","message":"Etiam justo.","date":"2/26/2023"},
{"id":"0f885598-dd01-44fc-86f0-f4b4f451b673","first_name":"Byrom","last_name":"Dahmel","message":"Aenean lectus. Pellentesque eget nunc.","date":"5/11/2023"},
{"id":"774bc257-ccb3-4db6-adc4-220551b48177","first_name":"Bert","last_name":"Fawbert","message":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","date":"2/16/2023"},
{"id":"0c2cebe9-912a-4900-9a19-7eb8044780b9","first_name":"Lelia","last_name":"Eddy","message":"Quisque porta volutpat erat.","date":"9/16/2023"},
{"id":"e847add9-e2a6-47b4-b68a-2208c9f71bbc","first_name":"Hamil","last_name":"Allchorn","message":"Vestibulum ac est lacinia nisi venenatis tristique.","date":"9/8/2023"},
{"id":"02bcb289-9c81-4286-9619-1712f358c2b9","first_name":"Appolonia","last_name":"Edensor","message":"Integer ac leo. Pellentesque ultrices mattis odio.","date":"9/29/2023"},
{"id":"0e8c718c-79c0-4cac-8844-9ba8bdcbe212","first_name":"Cheri","last_name":"Clurow","message":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","date":"2/28/2023"},
{"id":"cefada84-20f8-4891-83d9-a5c072cb5536","first_name":"Terrel","last_name":"Baskwell","message":"Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","date":"11/13/2023"},
{"id":"5a01858c-6b4f-4bbe-9d62-ab47bd29c9e1","first_name":"Elwyn","last_name":"Spencock","message":"Proin at turpis a pede posuere nonummy.","date":"6/23/2023"},
{"id":"984b3007-8a2a-4804-a1cc-4f6b8f6ce90d","first_name":"Zabrina","last_name":"Carlsen","message":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.","date":"4/3/2023"}]`)

interface Message {
  id: string,
  first_name: string,
  last_name: string,
  message: string;
  date: string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  host: {
    class: "w-full h-full flex flex-col text-white"
  }
})
export class ChatComponent {
  messages: Message[] = data;
}
