
import { rest } from 'msw';
import { API_URL } from '../utils/constants';

const id = 1;

export const handlers = [ 
  rest.get(`${API_URL}/clase`, (req, res, ctx) => {  
    return res(
      ctx.status(200),
      ctx.json({ data: 'Lista de clases' })
    );
  }),
  rest.get(`${API_URL}/clase/${id}`, (req,res,ctx) => {
    return res(
        ctx.status(200),
        ctx.json({ data : `Lista de clases con id ${id}`})
    )
  }),
  rest.post(`${API_URL}/clase/addClase`,(req,res,ctx) => {
    req = {
        /*Aqui los parametros para añadir una clase*/
    }
    return res(
        ctx.status(200),
        ctx.string({ data : 'Clase Añadida'})
    )
  }),
  rest.put(`${API_URL}/clase/editClase/${id}`,(req,res,ctx) => {
    req = {
    /*Aqui los parametros para editar una clase*/
    }
    return res(
      ctx.status(200),
      ctx.string({ data : 'Clase Editada'})
    )
  }),
  rest.delete(`${API_URL}/clase/deleteClase/${id}`,(req,res,ctx) => {
    return res(
      ctx.status(200),
      ctx.string({ data : 'Clase Eliminada'})
    )
  }),
  rest.get(`${API_URL}/reserva`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Lista de reservas'})
    )
  }),
  rest.get(`${API_URL}/reserva/${id}`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : `Reserva con id : ${id}`})
    )
  }),
  rest.post(`${API_URL}/reserva/addReserva`,(req,res,ctx) => {
    req = {
        /**Aqui los parametros de addReserva */
    }
    return res(
      ctx.status(200),
      ctx.json({ data : 'Reserva creada'})
    )
  }),
  rest.put(`${API_URL}/reserva/editReserva/${id}`,(req,res,ctx) => {
    req = {
        /**Aqui los parametros a editar*/
    }
    return res(
      ctx.status(200),
      ctx.json({ data : 'Reserva editada'})
    )
  }),
  rest.delete(`${API_URL}/reserva/deleteReserva/${id}`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Reserva eliminada'})
    )
  }),
  rest.get(`${API_URL}/usuario`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Lista de usuarios'})
    )
  }),
  rest.get(`${API_URL}/usuario/${id}`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : `Ususario con id : ${id}`})
    )
  }),
  rest.get(`${API_URL}/usuario/instructor`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Lista de instructores'})
    )
  }),
  rest.get(`${API_URL}/usuario/instructor/${id}`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : `Intructor con id : ${id}` })
    )
  }),
  rest.get(`${API_URL}/inicioSesion`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Sesion iniciada'})
    )
  }),
  rest.post(`${API_URL}/registro`,(req,res,ctx) => {
    req = {
        /**Aqui parametros de usuario */
    }
    return res(
      ctx.status(200),
      ctx.json({ data : 'Usuario registrado'})
    )
  }),
  rest.put(`${API_URL}/usuario/editUsuario/${id}`,(req,res,ctx) => {
    req = {
        /**Aqui los parametros para editar el usuario */
    }
    return res(
      ctx.status(200),
      ctx.json({ data : 'Usuario editado'})
    )
  }),
  rest.dlete(`${API_URL}/usuario/deleteUsuario/${id}`,(req,res,ctx) => {
  
    return res(
      ctx.status(200),
      ctx.json({ data : 'Usuario eliminado'})
    )
  }),

  

];