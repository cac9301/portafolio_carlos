import * as Yup from 'yup';

export const schema = Yup.object({
    name: Yup.string().required("el Nombre es requerido "),
    email: Yup.string()
    .email('correo invalido ')
    .required('correo es requerido '),
    textarea:Yup.string()
    .max(200, 'debe contener menos de 200 carateres')
    .required('la inquietud es requerida')
  });

