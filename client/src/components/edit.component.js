// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeTelefone = this.onChangeTelefone.bind(this);
    this.onChangeCPF = this.onChangeCPF.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      telefone: '',
      CPF:'',
      cursos: [],
      cursosPessoa: []
    }
  }

  componentDidMount() {
            axios.get('http://localhost:3001/pessoas/'+this.props.match.params.id)
                .then(response => {
                    this.setState({ 
                        nome: response.data.nome, 
                        telefone: response.data.telefone,
                        CPF: response.data.CPF,
                        cursosPessoa: response.data.cursos
                        });
                })
                .catch(function (error) {
                    console.log(error);
                })
            axios.get('http://localhost:3001/cursos')
            .then(response => {
                this.setState({ cursos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })    
    }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeTelefone(e) {
    this.setState({
      telefone: e.target.value
    })  
  }
  onChangeCPF(e) {
    this.setState({
      CPF: e.target.value
    })
  }


 
  onSubmit(e) {
    e.preventDefault();
    
    let cursosArray = [];
    for(const i in this.state.cursos){
        if (document.getElementById(this.state.cursos[i]._id).checked) {
            cursosArray.push(this.state.cursos[i]._id);
        }
    }
    
    const obj = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      CPF: this.state.CPF,
      cursos: cursosArray
    };
    axios.put('http://localhost:3001/pessoas/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Alterar Pessoa</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      />
                </div>
                <div className="form-group">
                    <label>Telefone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.telefone}
                      onChange={this.onChangeTelefone}
                      placeholder="(DDD)9XXXX-XXXX"
                      />
                </div>
                <div className="form-group">
                    <label>Numero do CPF: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.CPF}
                      onChange={this.onChangeCPF}
                      placeholder="XXX.XXX.XXX-XX"
                      />
                </div>
                <div className="form-group">
                    <label>Cursos: </label>
                    <ol>
                        {//deveria mostrar os cursos que a pessoa está participando, atualmente não funciona.
                            this.state.cursosPessoa.map((curso) => {
                                return (<li key={curso._id} value={curso._id}>
                                    {curso._id}
                                   </li>)
                            })
                        }
                    </ol>
                    <ul>
                            {
                            this.state.cursos.map((curso) => {
                                return (<li key={curso._id}>
                                    <input id={curso._id} type="checkbox" /*onChange={this.isChecked}*/ value={curso.nome} /> {curso.nome}
                                   </li>)
                            })
                            }
                        </ul>
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Atualizar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}