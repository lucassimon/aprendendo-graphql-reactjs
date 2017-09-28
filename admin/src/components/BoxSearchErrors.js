import React from 'react'

const FormErrors = ({errors}) => {
  return (

    <div className="column is-12">

      {Object.keys(errors).map((fieldName, i) => {
        if(errors[fieldName].length > 0){
          return (
            <article className="message is-danger" key={i}>
              <div className="message-body">
                <p
                  className="is-danger"
                >
                    {fieldName}:
                    {errors[fieldName]}
                </p>
              </div>
            </article>
          )
        } else {
          return '';
        }
      })}
    </div>
  )
}

export default FormErrors
