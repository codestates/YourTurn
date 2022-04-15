"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          id: 1,
          title: "가장 잘 아는 개발 방법론은 무엇입니까",
          content:
            "애자일 개발 방법론입니다. 애자일 방법론은 절차보다는 사람을, 문서보다는 작동하는 소프트웨어를, 미리 철저하게 계획하기 보다는 변화에 대한 민첩한 대응을, 계약과 협상에 얽매이기 보다는 고객과의 협력을 중요하게 생각합니다.",
          total_likes: 10,
          user_id: 1,
          team_id: 1,
          createdAt: "2022-03-08 00:00:00",
          updatedAt: "2022-03-08 00:00:00",
        },
        {
          id: 2,
          title: "소프트웨어 개발 중에 문제가 발생했을 때 어떻게 해결합니까?",
          content:
            "문제가 발생하기 전으로 돌아가 하나하나 실행해보며 문제를 찾고, 이를 해결하려고 노력합니다.",
          total_likes: 20,
          user_id: 2,
          team_id: 2,
          createdAt: "2022-03-09 00:00:00",
          updatedAt: "2022-03-09 00:00:00",
        },
        {
          id: 3,
          title: "코딩에서 가장 흥미로운 점은 무엇입니까?",
          content: "제가 작성한 코드 한줄한줄이 실행되는 것에 흥미를 느낍니다.",
          total_likes: 30,
          user_id: 1,
          team_id: 3,
          createdAt: "2022-03-10 00:00:00",
          updatedAt: "2022-03-10 00:00:00",
        },
        {
          id: 4,
          title: "잘했다고 생각하는 프로젝트에 대해 알려 주십시오.",
          content: "YourTurn에서 백엔드 개발을 했습니다.",
          total_likes: 40,
          user_id: 2,
          team_id: 4,
          createdAt: "2022-03-11 00:00:00",
          updatedAt: "2022-03-11 00:00:00",
        },
        {
          id: 5,
          title: "따로 진행하는 프로젝트가 있습니까?",
          content: "앞으로 많아질 예정입니다.....",
          total_likes: 50,
          user_id: 1,
          team_id: 5,
          createdAt: "2022-03-12 00:00:00",
          updatedAt: "2022-03-12 00:00:00",
        },
        {
          id: 6,
          title: "이상적인 개발 환경이란 무엇인가요?",
          content:
            "최고 사양의 컴퓨터, 인체 공학적인 의자와 책상, 진한 커피만 있다면 24시간 코딩 가능합니다.",
          total_likes: 60,
          user_id: 2,
          team_id: 1,
          createdAt: "2022-03-13 00:00:00",
          updatedAt: "2022-03-13 00:00:00",
        },
        {
          id: 7,
          title: "잘 못했다고 생각하는 프로젝트가 있습니까?",
          content: "잘 못했다기 보단 YourTurn을 개발할 때 처음이라 헤맸던 부분이 있었습니다.",
          total_likes: 70,
          user_id: 1,
          team_id: 2,
          createdAt: "2022-03-14 00:00:00",
          updatedAt: "2022-03-14 00:00:00",
        },
        {
          id: 8,
          title: "비 IT 동료와 효과적으로 의사소통하려면 어떻게 해야 합니까?",
          content: "전문 용어를 사용하지 않고 쉽게 풀어서 설명해줘야 합니다.",
          total_likes: 80,
          user_id: 2,
          team_id: 3,
          createdAt: "2022-03-15 00:00:00",
          updatedAt: "2022-03-15 00:00:00",
        },
        {
          id: 9,
          title: "왜 이 회사에서 일하고 싶습니까?",
          content: "화려한 복지, 최고의 연봉!!!",
          total_likes: 90,
          user_id: 1,
          team_id: 4,
          createdAt: "2022-03-16 00:00:00",
          updatedAt: "2022-03-16 00:00:00",
        },
        {
          id: 10,
          title: "마지막으로 질문 있습니까?",
          content: "입사하면 처음 배치되는 부서는 어디인가요? 또 어떤 일을 하게 될까요?",
          total_likes: 100,
          user_id: 2,
          team_id: 5,
          createdAt: "2022-03-17 00:00:00",
          updatedAt: "2022-03-17 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
