const CartIcon = (props) => {
  return (
    <div style={{ flexShrink: 0, width: '25px', height: '25px' }}>
      <svg onMouseEnter={props.hover} onMouseLeave={props.hover} id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
        <circle cx="25" cy="27" r="2" />
        <circle cx="12" cy="27" r="2" />
      </svg>
    </div>
  )
}

export default CartIcon
