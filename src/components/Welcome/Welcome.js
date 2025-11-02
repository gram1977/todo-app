// Welcome component recieves user data as props
// debugger;
import { useNavigate, useParams } from "react-router-dom";
console.log("Welcome.js loaded");
const Welcome = ({ user }) => {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div className="container mt-4">
      <div className="row judtify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Welcome to Todo App, {username}</h4>
              <button onClick={() => navigate(`/todos/${username}`)}>
                Go to Todos
              </button>
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
