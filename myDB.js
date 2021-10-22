import React, { Component } from 'react';
class myDb extends Component
{
static louay ={
emaill: '',
passwordd: '',
noOfCredits:'',
creditPrice :'',
others:'', 
totalfees: '',
value: ''
}

static getData = () =>
{
  return this.louay;
}
}

export default myDb;