(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{ 15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){'use strict';t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),o=t(2),l=t(3),i=t.n(l),m='/api/persons',s=function(){return i.a.get(m).then((function(e){return e.data}))},f=function(e){return i.a.delete(''.concat(m,'/').concat(e)).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},b=function(e,n){return i.a.put(''.concat(m,'/').concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.filtered,t=e.setFiltered;return u.a.createElement('div',null,'filter shown with:',u.a.createElement('input',{ value:n,onChange:function(e){return t(e.target.value)} }))},p=t(14),v=function(e){var n=e.create,t=e.setNewName,a=e.newNumber,r=e.setNewNumber,c=e.update,o=e.persons,l=e.setPersons,i=e.newName,m=function(e,n){window.confirm(''.concat(e.name,' is already added to phonebook, replace the old number with a new one?'))&&c(Object(p.a)({},e,{ number:n }))};return u.a.createElement(u.a.Fragment,null,u.a.createElement('form',{ onSubmit:function(e){e.preventDefault();var u=o.find((function(e){return e.name===i})),c={ name:i,number:a };void 0!==u&&u.name.includes(i)?m(u,a):(l(n(c)||o.concat(c)),t(''),r(''))} },u.a.createElement('div',null,'name: ',u.a.createElement('input',{ value:i,onChange:function(e){return t(e.target.value)} })),u.a.createElement('div',null,'number: ',u.a.createElement('input',{ value:a,onChange:function(e){return r(e.target.value)} })),u.a.createElement('div',null,u.a.createElement('button',{ type:'submit' },'add'))))},E=function(e){var n=e.persons,t=e.filtered,a=e.remove;return u.a.createElement(u.a.Fragment,null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return u.a.createElement('p',{ key:e.name },e.name,' ',e.number,u.a.createElement('button',{ onClick:function(){return a(e)} },'delete'))})))},w=function(e){var n=e.message;return null===n?null:u.a.createElement('div',{ className:'success' },n)},g=function(e){var n=e.message;return null===n?null:u.a.createElement('div',{ className:'error' },n)},N=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(''),l=Object(o.a)(c,2),i=l[0],m=l[1],p=Object(a.useState)(''),N=Object(o.a)(p,2),j=N[0],O=N[1],k=Object(a.useState)(''),C=Object(o.a)(k,2),S=C[0],y=C[1],T=Object(a.useState)(null),F=Object(o.a)(T,2),P=F[0],A=F[1],J=Object(a.useState)(null),L=Object(o.a)(J,2),x=L[0],B=L[1];Object(a.useEffect)((function(){s().then((function(e){r(e)}))}),[]);return u.a.createElement('div',null,u.a.createElement('h3',null,'Phonebook'),u.a.createElement('div',null,u.a.createElement(h,{ filtered:S,setFiltered:y })),u.a.createElement(w,{ message:P }),u.a.createElement(g,{ message:x }),u.a.createElement('h3',null,'Add new'),u.a.createElement(v,{ newName:i,setNewName:m,newNumber:j,setNewNumber:O,persons:t,setPersons:r,create:function(e){d(e).then((function(n){r(t.concat(n)),m(''),A('Added '.concat(e.name)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){B(e.response.data.error),console.log(e.response.data),setTimeout((function(){B(null)}),2e3)}))},update:function(e){b(e.id,e).then((function(n){r(t.map((function(n){return n.id!==e.id?n:e}))),A('Changed '.concat(e.name,'\'s number')),setTimeout((function(){A(null)}),5e3)})).catch((function(n){B(''.concat(e.name,' is aldready deleted from the server'))})),setTimeout((function(){A(null)}),5e3)} }),u.a.createElement('h3',null,'Numbers'),u.a.createElement(E,{ persons:t,filtered:S,remove:function(e){window.confirm('Poistetaanko '.concat(e.name))&&(f(e.id).then((function(e){s().then((function(e){r(e)}))})),A('Removed\' '.concat(e.name,' \'succesfully')),setTimeout((function(){A(null)}),5e3))} }))};t(37);c.a.render(u.a.createElement(N,null),document.getElementById('root'))} },[[15,1,2]]])
//# sourceMappingURL=main.490cb85a.chunk.js.map