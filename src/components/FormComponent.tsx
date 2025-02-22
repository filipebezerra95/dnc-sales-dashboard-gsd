import styled from 'styled-components'
import { StyledButton, StyledInput } from '@/components'
import { FormComponentProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <StyledForm>
      {inputs.map((inputprops, index) => (
        <StyledInput key={index} {...inputprops} />
      ))}
      {buttons.map((buttonprops, index) => (
        <StyledButton key={index} {...buttonprops} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponent
