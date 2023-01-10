import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
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
          name="post"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Post
        </Label>

        <TextField
          name="post"
          defaultValue={props.post?.post}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="post" className="rw-field-error" />

        <Label
          name="callsign"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Callsign
        </Label>

        <TextField
          name="callsign"
          defaultValue={props.post?.callsign}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="callsign" className="rw-field-error" />

        <Label
          name="req_gear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Req gear
        </Label>

        <TextField
          name="req_gear"
          defaultValue={props.post?.req_gear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="req_gear" className="rw-field-error" />

        <Label
          name="hours"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hours
        </Label>

        <TextField
          name="hours"
          defaultValue={props.post?.hours}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="hours" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
