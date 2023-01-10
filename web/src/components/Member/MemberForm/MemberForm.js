import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const MemberForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.member?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="rank"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rank
        </Label>

        <TextField
          name="rank"
          defaultValue={props.member?.rank}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rank" className="rw-field-error" />

        <Label
          name="last_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="last_name"
          defaultValue={props.member?.last_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="last_name" className="rw-field-error" />

        <Label
          name="first_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="first_name"
          defaultValue={props.member?.first_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="first_name" className="rw-field-error" />

        <Label
          name="certifications"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Certifications
        </Label>

        <TextField
          name="certifications"
          defaultValue={props.member?.certifications}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="certifications" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <TextField
          name="status"
          defaultValue={props.member?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MemberForm
