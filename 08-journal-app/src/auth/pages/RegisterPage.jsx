import React, {useState} from 'react'

import { useDispatch } from 'react-redux'

import { Link  as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El Nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false)

  const {
    formState, displayName, email,password, onInputChange, 
     isFormValid, displayNameValid, emailValid, passwordValid, 
    } = useForm(formData, formValidations)

   
  const onSumbit = (event) => {
    event.preventDefault()
    setFormSubmited(true)

    if( !isFormValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <h1>FormValid: {isFormValid ? 'Válido': 'Inválido'}</h1>

        <form onSubmit={ onSumbit }>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder='Jhon Dae'
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmited}
                helperText={ displayNameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com'
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmited}
                helperText={ emailValid }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='contraseña'
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmited}
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1,}}>
              <Grid item xs={12}>
                <Button 
                  type='submit'
                  variant='contained' 
                  fullWidth
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} 
              color='inherit' 
              to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </form>

    </AuthLayout>

  )
}
