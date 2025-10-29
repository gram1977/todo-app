// Welcome component recieves user data as props
// debugger;
console.log("Welcome.js loaded");
const Welcome = ({ user }) => {
  return(
  <div className="container mt-4">
    <div className="row judtify-content-center">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">
            <h4 className="mb-0">Welcome to Todo App</h4>
          </div>
          <div className="card-body">
            <h5>Hello, {user.email}</h5>
            <p className="text-muted">You have successfully logged in.</p>
          </div>

          <div className="alert alert-info">
            <strong>Coming Soon:</strong>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Welcome;
