  <script>
    var base_url = {{ site.baseurl | jsonify }},
        pagination_next_url = base_url + '{{ paginator.next_page_path }}',
        pagination_next_page_number = '{{ paginator.next_page }}',
        pagination_available_pages_number = '{{ paginator.total_pages }}';
  </script>
