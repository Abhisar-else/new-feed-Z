import React, { useState } from 'react';
import { Card, Badge, Button, Form, ListGroup } from 'react-bootstrap';
import { Heart, HeartFill, Chat, Share, Bookmark, BookmarkFill, ThreeDots } from 'react-bootstrap-icons';

const Feed = () => {
  // Posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alison Hata',
      initials: 'AH',
      content: 'Alison just completed 2 years in the company. Congratulate her!',
      image: null,
      likes: 24,
      comments: 5,
      isLiked: false,
      isSaved: false
    },
    {
      id: 2,
      user: 'Harith Swanson',
      initials: 'HS',
      content: 'Thanks for leading one of the most productive design sprints ever, Rosia. Great win for the team.',
      image: '/images/group-discussion.jpeg',
      points: 200,
      recipient: 'Rosia Thorpe',
      likes: 42,
      comments: 3,
      isLiked: true,
      isSaved: false
    },
    {
      id: 3,
      user: 'Travel Enthusiast',
      initials: 'TE',
      content: 'Beautiful sunset views from our last team retreat!',
      image: '/images/sunset.jpeg',
      likes: 87,
      comments: 12,
      isLiked: false,
      isSaved: true
    }
  ]);

  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Clarence Gale',
      initials: 'CG',
      content: 'Had an amazing experience working with Rosia.'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  // Handlers
  const handleLike = (postId) => {
    setPosts(posts.map(post => ({
      ...post,
      isLiked: post.id === postId ? !post.isLiked : post.isLiked,
      likes: post.id === postId ? (post.isLiked ? post.likes - 1 : post.likes + 1) : post.likes
    })));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => ({
      ...post,
      isSaved: post.id === postId ? !post.isSaved : post.isSaved
    })));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        user: 'Current User',
        initials: 'CU',
        content: newComment
      }]);
      setNewComment('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#ffffff'
    }}>
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '15px 20px 10px',
        backgroundColor: '#ffffff',
        overflowY: 'auto'
      }}>
        <h4 style={{
          fontWeight: 600,
          color: '#333',
          marginBottom: '15px'
        }}>Feed</h4>
        
        {posts.map(post => (
          <Card key={post.id} style={{
            borderRadius: '10px',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
            marginBottom: '15px'
          }}>
            <Card.Body style={{ padding: '12px 16px' }}>
              {/* Post Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: '#f0f2f5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    color: '#495057',
                    marginRight: '10px'
                  }}>{post.initials}</div>
                  <strong>{post.user}</strong>
                  {post.points && (
                    <>
                      <span style={{ margin: '0 8px' }}>gave</span>
                      <Badge bg="warning" text="dark" style={{
                        fontSize: '0.8rem',
                        padding: '0.35em 0.65em'
                      }}>
                        {post.points} points
                      </Badge>
                      <span style={{ margin: '0 8px' }}>to</span>
                      <strong>{post.recipient}</strong>
                    </>
                  )}
                </div>
                <Button variant="link" style={{ padding: 0 }}>
                  <ThreeDots />
                </Button>
              </div>

              {/* Post Content */}
              <Card.Text style={{ marginBottom: post.image ? '6px' : '12px', fontSize: '0.95rem' }}>
                {post.content}
              </Card.Text>

              {/* Post Image */}
              {post.image && (
                <div style={{
                  maxHeight: '500px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}>
                  <img src={post.image} alt="Post content" style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }} />
                </div>
              )}

              {/* Like/Comment/Share Actions */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
                borderTop: '1px solid #e9ecef',
                borderBottom: '1px solid #e9ecef',
                margin: '12px 0'
              }}>
                <div style={{ display: 'flex' }}>
                  <Button 
                    variant="link" 
                    style={{
                      padding: 0,
                      marginRight: '16px',
                      color: '#495057',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem'
                    }}
                    onClick={() => handleLike(post.id)}
                  >
                    {post.isLiked ? (
                      <HeartFill style={{ color: '#dc3545', marginRight: '4px' }} />
                    ) : (
                      <Heart style={{ marginRight: '4px' }} />
                    )}
                    <span>{post.likes}</span>
                  </Button>
                  <Button 
                    variant="link" 
                    style={{
                      padding: 0,
                      marginRight: '16px',
                      color: '#495057',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem'
                    }}
                  >
                    <Chat style={{ marginRight: '4px' }} />
                    <span>{post.comments}</span>
                  </Button>
                  <Button 
                    variant="link" 
                    style={{
                      padding: 0,
                      color: '#495057',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem'
                    }}
                  >
                    <Share style={{ marginRight: '4px' }} />
                  </Button>
                </div>
                <Button 
                  variant="link" 
                  style={{
                    padding: 0,
                    color: '#495057',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.9rem'
                  }}
                  onClick={() => handleSave(post.id)}
                >
                  {post.isSaved ? (
                    <BookmarkFill style={{ color: '#212529' }} />
                  ) : (
                    <Bookmark />
                  )}
                </Button>
              </div>

              {/* Comments Section */}
              {post.id === 2 && (
                <div style={{ marginTop: '12px' }}>
                  <Form onSubmit={handleCommentSubmit} style={{ marginBottom: '12px' }}>
                    <Form.Control 
                      as="textarea" 
                      rows={2} 
                      placeholder="Write a comment" 
                      style={{
                        borderRadius: '18px',
                        backgroundColor: '#f8f9fa',
                        border: 'none',
                        resize: 'none',
                        fontSize: '0.9rem',
                        padding: '8px 12px'
                      }}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="sm" 
                      style={{ marginTop: '6px', float: 'right', padding: '4px 12px' }}
                      disabled={!newComment.trim()}
                    >
                      Post
                    </Button>
                  </Form>
                  {comments.map(comment => (
                    <div key={comment.id} style={{
                      borderLeft: '2px solid #e9ecef',
                      paddingLeft: '12px',
                      marginBottom: '6px'
                    }}>
                      <div style={{ display: 'flex' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#f0f2f5',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600,
                          color: '#495057',
                          marginRight: '10px',
                          fontSize: '0.8rem'
                        }}>{comment.initials}</div>
                        <div style={{ fontSize: '0.9rem' }}>
                          <strong>{comment.user}</strong>
                          <p style={{ marginBottom: 0 }}>{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        ))}

        {/* Asma Khouri Birthday Card - Moved to bottom */}
        <Card style={{
          borderRadius: '10px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
          marginBottom: '15px'
        }}>
          <Card.Body style={{ padding: '12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#f0f2f5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                color: '#495057',
                marginRight: '10px'
              }}>AK</div>
              <div>
                <strong>Asma Khouri</strong>
                <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>+6 more wished Asma a happy birthday. Wish her now!</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Feed;