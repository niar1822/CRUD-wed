import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "./productForm.css";

export default function ProductForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio"),
    cantidad: yup.number().required("La cantidad es obligatoria").positive(),
    precio: yup.number().required("El precio es obligatorio").positive(),
    imagen: yup.mixed().required("Seleccione una imagen"),
  });

  return (
    <div className="container mt-4" id="form-container">
      <Formik
        validationSchema={schema}
        initialValues={{
          nombre: "",
          cantidad: "",
          precio: "",
          imagen: null,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md={4}>
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  isInvalid={touched.nombre && !!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  name="cantidad"
                  value={values.cantidad}
                  onChange={handleChange}
                  isInvalid={touched.cantidad && !!errors.cantidad}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cantidad}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  value={values.precio}
                  onChange={handleChange}
                  isInvalid={touched.precio && !!errors.precio}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.precio}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFieldValue("imagen", e.target.files[0])}
                isInvalid={!!errors.imagen}
              />
              <Form.Control.Feedback type="invalid">
                {errors.imagen}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar Producto
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
