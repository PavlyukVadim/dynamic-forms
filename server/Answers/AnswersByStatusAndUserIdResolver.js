const db = require('../config/db');

const getAnswersByStatusAndUserId = (userId, status) => {
  return db.any(`
    SELECT
      answer_id,
      test_id,
      user_id,
      form_answers,
      status_id,
      passage_date,
      statuses.type
    FROM answers
    JOIN statuses
    USING (status_id)
    WHERE user_id = $1
    AND statuses.type = $2
  `, [userId, status]);
};

const AnswersByStatusAndUserIdResolver = async(parentValue, { userId, status }) => {
  const answers = await getAnswersByStatusAndUserId(userId, status);
  return answers;
};

module.exports = AnswersByStatusAndUserIdResolver;