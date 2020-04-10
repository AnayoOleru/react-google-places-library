import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'

class SearchBar extends Component {
  inputRef = React.createRef()

  constructor (props) {
    super(props)
    this.state = {
      focus: false,
      value: !this.props.value ? '' : this.props.value,
      active: false
    }
    
  }

  static getDerivedStateFromProps (props, state) {
    if (props.value !== state.value) {
      return { value: props.value }
    }
    return null
  }

  handleFocus = (e) => {
    this.setState({focus: true})
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

//   handleBlur = (e) => {
//     this.setState({focus: false})
//     if (this.state.value.trim().length === 0) {
//       this.setState({value: ''})
//     }
//     if (this.props.onBlur) {
//       this.props.onBlur(e)
//     }
//   }

  handleInput = (e) => {
    this.setState({value: e.target.value})
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  handleCancel = () => {
    this.setState({active: false, value: ''})
    if (this.props.onCancelSearch) {
      this.props.onCancelSearch()
    }
  }

  handleKeyUp = (e) => {
    if (e.charCode === 13 || e.key === 'Enter') {
      this.handleRequestSearch()
    } else if (this.props.cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
      this.handleCancel()
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e)
    }
  }

  handleRequestSearch = () => {
    if (this.props.onRequestSearch) {
      this.props.onRequestSearch(this.state.value)
    }
  }

  /**
   * @public
   * Focus the input component.
   */
  focus = () => {
    this.inputRef.current.focus()
  }

  /**
   * @public
   * Blur the input component.
   */
  blur = () => {
    this.inputRef.current.blur()
  }

  render () {
    const { value } = this.state
    const {
      cancelOnEscape,
      className,
      classes,
      closeIcon,
      disabled,
      onCancelSearch,
      onRequestSearch,
      searchIcon,
      containerStyle,
      inputStyle,
      inputContainer,
      iconButton,
      searchIconButton,
      iconButtonHidden,
      iconButtonDisabled,
      icon,
      ...inputProps
    } = this.props

    return (
      <Paper
        style={!containerStyle ? null : containerStyle}
      >
        <div style={inputContainer}>
          <Input
            {...inputProps}
            inputRef={this.inputRef}
            // onBlur={this.handleBlur}
            value={value}
            placeholder= 'Search'
            onChange={this.handleInput}
            onKeyUp={this.handleKeyUp}
            onFocus={this.handleFocus}
            fullWidth
            style={inputStyle}
            disableUnderline
            // disabled={disabled}
          />
        </div>
      </Paper>
    )
  }
}

SearchBar.defaultProps = {
  className: '',
  disabled: false,
  placeholder: 'Search',
//   value: ''
}

SearchBar.propTypes = {
  cancelOnEscape: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeIcon: PropTypes.node,
  disabled: PropTypes.bool,
  onCancelSearch: PropTypes.func,
  onChange: PropTypes.func,
  onRequestSearch: PropTypes.func,
  placeholder: PropTypes.string,
  searchIcon: PropTypes.node,
  style: PropTypes.object,
}

export default SearchBar;
